// Stream every entry
// Transform into model
// Upsert properly

import { readChatId, readMessages } from './readers';

const main = async () => {
  const path = 'bound/result.json';
  let count = 0;

  const chatId = await readChatId(path);

  for await (const _message of readMessages(path)) {
    void _message;
    count++;
  }

  console.log('chatId: ', chatId);
  console.log(count);
  console.log('done');
};

main();
