
import { Injectable } from '@angular/core';
import { CommonDataService } from './common-data.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConversationMessage } from '../model/conversation-message.dto';
import { RestEndPoints } from '../global/RestEndPoints';

@Injectable()
export class GlobalService extends CommonDataService {



    sendConversationMessage(message: ConversationMessage) {

        const url: string = RestEndPoints.getBaseURL() + RestEndPoints.MESSAGE;
        return super.getEntityWithPayloadAsArg(url, message);
    }





}
