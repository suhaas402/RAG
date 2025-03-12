import"dotenv/config"
import {DataAPIClient} from "@datastax/astra-db-ts"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { chromium, firefox, webkit } from 'playwright';
import ollama from "ollama"
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"
