export const GValidate = (params: string) => {
    return function (target: any, methodName: any, descriptor: any) {
        const oldMethod = descriptor.value;
        descriptor.value = function (...args) {
            (<HTMLFormElement>this.$refs[params]).validate(async valid => {
                if (valid) {
                    oldMethod.apply(this, args)
                } else {
                    return false
                }
            });
        }
        return descriptor
    }
}
import { Message } from 'element-ui'
import { MessageType } from 'element-ui/types/message';
export const GElementUIMessage = (type?:MessageType,message?:string,duration?:number) => {
    return function (target: any, methodName: any, descriptor: any) {
        const oldMethod = descriptor.value;
        descriptor.value = function (...args) {
            Message({
                type:type || 'success',
                duration:duration || 3000,
                message:message || '操作成功'
            })
            new Promise((resolve,reject)=>{
                let res = oldMethod.apply(this, args)
                console.log(res)
            })
        }
        return descriptor
    }
}
