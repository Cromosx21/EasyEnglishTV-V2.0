import { pgTable, serial, text, timestamp, boolean, integer, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: text('clerk_id').notNull().unique(),
  email: text('email').notNull(),
  role: text('role').default('student'), // 'student' | 'admin'
  fullName: text('full_name'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  level: text('level').notNull(), // 'Básico' | 'Intermedio' | 'Avanzado'
  price: integer('price').notNull(), // stored in cents
  status: text('status').default('draft'), // 'draft' | 'published'
  coverImage: text('cover_image'),
  videoUrl: text('video_url'),
  whatYouWillLearn: jsonb('what_you_will_learn').default([]),
  syllabus: jsonb('syllabus').default([]),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const materials = pgTable('materials', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  type: text('type').notNull(), // 'E-Book' | 'Audio' | 'Pack'
  format: text('format'), // 'PDF' | 'MP3' | 'ZIP'
  price: integer('price').notNull(), // stored in cents
  status: text('status').default('active'), // 'active' | 'inactive'
  description: text('description'),
  features: jsonb('features').default([]),
  coverImage: text('cover_image'),
  fileUrl: text('file_url'),
  salesCount: integer('sales_count').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const enrollments = pgTable('enrollments', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  courseId: integer('course_id').references(() => courses.id),
  progress: integer('progress').default(0),
  completed: boolean('completed').default(false),
  enrolledAt: timestamp('enrollment_date').defaultNow(),
});
