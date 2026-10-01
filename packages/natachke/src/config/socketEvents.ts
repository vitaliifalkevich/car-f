export const socketEvents = {
  //complaint
  COMPLAINT_ADD: 'complaint:add',
  COMPLAINT_ADDED_SUCCESS: 'complaint:add-success',

  //chat
  CHAT_SUBSCRIBE: 'chat:subscribe',
  CHAT_SUBSCRIBED_SUCCESS: 'chat:subscribe-success',
  CHAT_UNSUBSCRIBE: 'chat:unsubscribe',
  CHAT_UNSUBSCRIBE_SUCCESS: 'chat:unsubscribe-success',

  //message
  MESSAGES_GET: 'messages:get',
  MESSAGES_GET_SUCCESS: 'messages:get-success',
  MESSAGE_ADD: 'message:add',
  MESSAGE_ADD_SUCCESS: 'message:add-success',
  MESSAGES_NEW_MESSAGE: 'messages:new_message',

  //statuses
  STATUS_READ: 'status:read',
  STATUS_READ_SUCCESS: 'status:read-success',
}
