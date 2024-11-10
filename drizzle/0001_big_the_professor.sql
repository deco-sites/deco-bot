CREATE TABLE `threads` (
	`id` text PRIMARY KEY NOT NULL,
	`pull_request_id` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `reviews` ADD `type` text NOT NULL;