const calculateLeaderboardPlaces = (users, minScores) => {
  const leaderboard = [];
  const sortedUsers = users.sort((a, b) => b.score - a.score);
  let firstPlace, secondPlace, thirdPlace;

  const addUserToLeaderboard = (user, place) => leaderboard.push({userId: user.userId, place});

  let additionalPlace = 4;
  for (const user of sortedUsers) {
    if (!firstPlace && user.score >= minScores.firstPlaceMinScore) {
      addUserToLeaderboard(user, 1);
      firstPlace = true;
    } else if (!secondPlace && user.score >= minScores.secondPlaceMinScore) {
      addUserToLeaderboard(user, 2);
      secondPlace = true;
    } else if (!thirdPlace && user.score >= minScores.thirdPlaceMinScore) {
      addUserToLeaderboard(user, 3);
      thirdPlace = true;
    } else {
      addUserToLeaderboard(user, additionalPlace);
      additionalPlace++;
    }
  }

  return leaderboard;
};
