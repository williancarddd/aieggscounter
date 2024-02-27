import * as bcrypt from 'bcrypt';
import { ENV } from 'src/common/constants/constants';

export async function compare(password: string, ecrypted: string) {
  return await bcrypt.compare(password, ecrypted);
}

export async function generateHash(password: string) {
  return await bcrypt.hash(password, ENV.SALT);
}
