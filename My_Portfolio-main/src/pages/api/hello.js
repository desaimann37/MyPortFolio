// Next.js API routes

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const username = "dr__strange";
    const query = `{
      matchedUser(username: "${username}") {
        username
        profile {
          realName
          userAvatar
          reputation
          ranking
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
      userContestRanking(username: "${username}") {
          attendedContestsCount
          rating
          globalRanking
          totalParticipants
          topPercentage
          badge {
              name
          }
      }
    }`;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
