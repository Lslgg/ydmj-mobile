type FormGql = {
    data?: string,
    module?: string,
    save?: string,
    url?: string
}

declare var require: any;

/**
 * 公共的数据
 */
interface IUtility{
    /**
     * 当前月开始日期
     */
    startDate: string;
    
    /**
     * 当前月结束日期
    */
    endDate: string;

     /**
     * 日期格式
     * @param date 日期
     * @param format 格式 默认 'YYYY-MM-DD' 
     */
    toDateFormat(date?:Date,format?:string);
}