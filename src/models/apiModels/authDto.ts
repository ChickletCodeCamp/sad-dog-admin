export type LoginUserDto = {
  /**
   * user email
   */
  email: string;

  /**
   * user password
   */
  password: string;
};

export interface LoginFormProps {
  /**登入按鈕
   *
   * @param values
   * @returns
   */
  onFinish: (values: any) => void;
}
