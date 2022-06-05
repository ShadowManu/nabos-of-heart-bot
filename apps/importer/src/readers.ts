import { parse } from 'JSONStream';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

interface Message {
  id: number;
}

async function* getJSONStream<T = unknown>(
  path: string,
  selector: string
): AsyncGenerator<T, void, undefined> {
  const readable = createReadStream(path);
  const writable = parse(selector);
  // This is needed since JSONStream is not compatible with async iterators
  const compat = new Transform({
    objectMode: true,
    transform(chunk, _, callback) {
      callback(null, chunk);
    },
  });

  pipeline(readable, writable, compat);
  yield* compat;
}

export const readChatId = async (path: string) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (await getJSONStream<number>(path, 'id').next()).value!;

export const readMessages = (path: string) =>
  getJSONStream<Message>(path, 'messages.*');
