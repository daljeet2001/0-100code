"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
const pg_1 = require("pg");
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client("postgres://postgres:daljeet@localhost:5432/week10.1");
        yield client.connect();
        return client;
    });
}
function createEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield getClient();
        const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
        const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];
        let response = yield client.query(insertUserText, userValues);
        const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
        const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
        yield client.query(insertTodoText, todoValues);
        console.log("Entries created!");
    });
}
createEntries();
