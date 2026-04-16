import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.optional(v.string()),
    name: v.optional(v.string()),
  }).index("by_clerkId", ["clerkId"]),
  
  subjects: defineTable({
    slug: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  topics: defineTable({
    slug: v.string(),
    subjectSlug: v.string(),
    title: v.string(),
    description: v.optional(v.string()),
    orderIndex: v.number(),
  })
  .index("by_slug", ["slug"])
  .index("by_subject", ["subjectSlug", "orderIndex"]),

  contentSections: defineTable({
    topicSlug: v.string(),
    sectionId: v.string(),
    subheading: v.string(),
    content: v.any(), // representing JSONB
    orderIndex: v.number(),
  })
  .index("by_topic", ["topicSlug", "orderIndex"])
  .index("by_topic_and_section", ["topicSlug", "sectionId"]),
});
