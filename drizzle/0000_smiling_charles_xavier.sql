CREATE TABLE `reviews` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`reviewer_github_username` text NOT NULL,
	`reviewer_discord_id` text NOT NULL,
	`pull_request_id` text NOT NULL,
	`pull_request_url` text NOT NULL
);
