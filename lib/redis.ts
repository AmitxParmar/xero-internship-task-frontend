import upstashRedisClient from "@upstash/redis";

const redis = upstashRedisClient(
    process.env.UPSTASH_REDIS_URL,
    process.env.UPSTASH_REDIS_TOKEN
);