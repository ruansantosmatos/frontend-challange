import * as getValidEmail from './GetValidEmail'
import * as createUser from './CreateUser'

export const ServiceSingUp = {
    ...getValidEmail,
    ...createUser
}