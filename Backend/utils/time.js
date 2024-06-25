const getMinutesPastMidnight = (dateString) => {
    const date = new Date(dateString);
    return date.getHours() * 60 + date.getMinutes();
  };
  
  module.exports = {
    getMinutesPastMidnight
  };
  