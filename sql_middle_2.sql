SELECT t.TeamName
FROM Team t
LEFT JOIN (
    SELECT TeamName,
           COUNT(CASE WHEN PlayerLeft IS NULL THEN 1 END) AS ActivePlayers,
           COUNT(PlayerLeft) AS LeftPlayers
    FROM PlayerTeam
    GROUP BY TeamName
) AS PlayersCount ON t.TeamName = PlayersCount.TeamName
WHERE COALESCE(ActivePlayers, 0) <= COALESCE(LeftPlayers, 0)
ORDER BY t.TeamEstablishment ASC;