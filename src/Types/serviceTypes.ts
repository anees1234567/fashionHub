export type ResponseType<T> = {
  response: T;
  responseIndicator: "success" | "fail";
  statusCode: string;
  responseMessage: string;
};

export const emptyError:ResponseType<null> = {
  response: null,
  responseIndicator:"fail",
  statusCode: '500',
  responseMessage: "Something went wrong"
}
export const NotFoundError:ResponseType<null> = {
  response: null,
  responseIndicator:"fail",
  statusCode: '401',
  responseMessage: "invalid email Address or password"
}