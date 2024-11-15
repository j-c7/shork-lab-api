BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Short] (
    [id] INT NOT NULL IDENTITY(1,1),
    [url] NVARCHAR(1000) NOT NULL,
    [shortUrl] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Short_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[UserShorts] (
    [id] INT NOT NULL IDENTITY(1,1),
    [url] NVARCHAR(1000) NOT NULL,
    [shortUrl] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [UserShorts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- AddForeignKey
ALTER TABLE [dbo].[UserShorts] ADD CONSTRAINT [UserShorts_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
