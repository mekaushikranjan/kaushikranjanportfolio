import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
}).extend({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be 50 characters or less").trim(),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be 50 characters or less").trim(),
  email: z.string().email("Please enter a valid email address").max(254, "Email must be 254 characters or less").trim().toLowerCase(),
  subject: z.string().min(1, "Subject is required").max(200, "Subject must be 200 characters or less").trim(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be 2000 characters or less").trim(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
