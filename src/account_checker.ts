import axios from 'axios';
import * as cheerio from 'cheerio';


export class AccountChecker {

    private static async mainCall(url:string){
        try {
            const response = await axios.get(url);

            const html = response.data;
            const $ = cheerio.load(html);

            const selectedMetaTag = $('meta[property="og:title"]').last();

            if (selectedMetaTag.length > 0) {
                const content = selectedMetaTag.attr('content'); // return name of the user
                return true;
            } else {
                return false;
            }

        } catch (error) {
            return error;
        }
    }

    static async checkFacebookAccount(username:string){
        let url = `https://www.facebook.com/${username}`;
        return this.mainCall(url);
    }

    static async checkInstagramAccount(username:string){
        let url = `https://www.instagram.com/${username}`;
        return this.mainCall(url);
    }

}
