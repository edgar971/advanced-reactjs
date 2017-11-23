
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
    return this.subscriptionId;
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