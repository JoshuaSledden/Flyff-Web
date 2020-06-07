SELECT 
    [account],
    [event],
    [time],
    [ip]
FROM Events_Tbl
WHERE account = @accountId