# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Youdao to Anki is a TypeScript application that synchronizes vocabulary from Youdao Dictionary word lists to Anki flashcards. The process involves three main steps:
1. Sync words from Youdao word lists to local database
2. Look up detailed word definitions in Oxford Advanced Learner's Dictionary (OALD 10th edition)
3. Import the enriched word data into Anki

## Development Commands

```bash
# Install dependencies
pnpm install

# Run the application (uses current directory as work directory)
pnpm run start

# Run with custom work directory
pnpm run start -- --dir=./local
# or
pnpm run start:local
```

## Architecture Overview

### Core Modules

- **`src/main.ts`**: Entry point that orchestrates the sync workflow
- **`src/config.ts`**: Configuration management for YAML config files
- **`src/entity.ts`**: Database initialization using TypeORM with SQLite

### Data Sources and Integration

- **`src/youdao/`**: Youdao Dictionary API integration
  - Uses desktop client API endpoints with cookie authentication
  - Syncs word lists incrementally based on last sync timestamp
  - Stores words and books in local SQLite database using TypeORM entities

- **`src/mdict.ts`**: Oxford Dictionary (OALD 10th edition) integration
  - Uses `js-mdict` library to read MDX/MDD dictionary files
  - Converts dictionary HTML content to Anki-compatible format
  - Extracts phonetics, definitions, and audio files

- **`src/anki/`**: Anki Connect integration
  - Creates custom "OX10" note model with word, phonetic, definition, and audio fields
  - Manages CSS/JS assets for proper dictionary formatting in Anki
  - Prevents duplicate cards within the same deck

### Configuration Requirements

The application requires a `config.yaml` file in the work directory with:
- Youdao cookie for API authentication
- Anki Connect URL (default: http://127.0.0.1:8765)
- Dictionary file paths and deck settings

### Database Schema

Uses TypeORM with SQLite for local storage:
- `Word` entity: stores Youdao word data with sync status
- `Book` entity: represents Youdao word books/categories
- Tracks which words have been successfully synced to Anki

### Dependencies and Tools

- **TypeScript** with `tsx` for execution
- **TypeORM** with `better-sqlite3` for database
- **axios** for HTTP requests to Youdao and Anki Connect APIs
- **js-mdict** for reading Oxford dictionary files
- **jsdom** + **jquery** for HTML parsing and manipulation
- **log4js** for structured logging

## External Dependencies

- **Anki Connect plugin** (AnkiWeb ID: 2055492159) must be installed in Anki
- **Oxford Advanced Learner's Dictionary 10th edition** MDX/MDD files must be available locally
- Dictionary files should be converted to SQLite format using mdict-utils if needed

## Workflow Logic

The main sync process (`src/main.ts`):
1. Initializes database connection
2. Syncs new/updated words from Youdao API
3. Sets up Anki note model and assets
4. For each unsynced word:
   - Looks up definition in Oxford dictionary
   - Validates word match between sources
   - Creates Anki note with rich formatting
   - Marks word as synced in local database
