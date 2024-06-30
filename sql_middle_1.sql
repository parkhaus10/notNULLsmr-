SELECT t.TeamName
FROM Team t
INNER JOIN (
    SELECT pt.TeamName, SUM(p.PlayerScore) AS TotalScore
    FROM PlayerTeam pt
    INNER JOIN Player p ON pt.PlayerName = p.PlayerName AND pt.PlayerBirth = p.PlayerBirth
    GROUP BY pt.TeamName
    HAVING SUM(p.PlayerScore) > 250
) AS ScoreSum ON t.TeamName = ScoreSum.TeamName
ORDER BY t.TeamName ASC;