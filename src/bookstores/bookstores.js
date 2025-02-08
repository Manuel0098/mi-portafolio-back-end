import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import cors from 'cors';
import express, { Router } from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';



export {
    PrismaClient,
    express,
    Router,
    cors,
    multer,
    fs,
    bcrypt,
} 