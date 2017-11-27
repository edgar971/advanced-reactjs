
class StateAPI {

  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      comments: this.mapIntoObject(rawData.comments),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }

  getComment(commentId) {
    return this.data.comments[commentId];
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  
  addComment = (comment) => {
    const id = this.guid();
    const picture = 'http://placehold.it/32x32';
    comment[id] = {...comment, id, picture};

    this.mergeWithState({
      comments: {...this.data.comments, ...comment}
    });
    
    return comment;
  }

  getArticleComments(articleId) {
    const comments =
      Object.keys(this.data.comments)
        .map((commentId) => this.data.comments[commentId])
        .filter((comment) => comment.articleId === articleId);

    return comments;
  }

  getState() {
    return this.data;
  }

  subscribe = (callback) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((callback) => callback());
  }

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm
    });
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  }

}

export default StateAPI;