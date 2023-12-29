export type CreateUserDto = {
  /**
   * 使用者全名
   */
  fullName: string;

  /**
   * user email
   */
  email: string;

  /**
   * user password
   */
  password: string;

  /**
   * 電話號碼(非必填)
   */
  phoneNumber: string;

  /**
   * 使用者名稱
   */
  userName: string;

  /**
   * 性別(男或女)
   */
  sex: SexType;

  /**
   * 年齡
   */
  age: number;
};

export type UpdateUserDto = {
  /**
   * user id
   */
  userId: string;

  /**
   * 使用者全名
   */
  fullName: string;

  /**
   * user email
   */
  email: string;

  /**
   * user password
   */
  password: string;

  /**
   * 電話號碼(非必填)
   */
  phoneNumber: string;

  /**
   * 使用者名稱
   */
  userName: string;

  /**
   * 性別(男或女)
   */
  sex: SexType;

  /**
   * 年齡
   */
  age: number;
};

export enum SexType {
  Boy = 'Boy',
  Girl = 'Girl'
}
