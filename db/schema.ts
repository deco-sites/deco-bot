import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const reviews = sqliteTable("reviews", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  reviewerGithubUsername: text("reviewer_github_username").notNull(),
  reviewerDiscordId: text("reviewer_discord_id").notNull(),
  pullRequestId: text("pull_request_id").notNull(),
  pullRequestUrl: text("pull_request_url").notNull(),
  type: text("type").notNull(),
});

export const threads = sqliteTable("threads", {
  id: text("id").primaryKey(),
  pullRequestId: text("pull_request_id").notNull(),
});
