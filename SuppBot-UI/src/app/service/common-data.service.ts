import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


// import { HttpClientModule } from '@angular/common/http';

declare var JSOG: any;

declare var pako: any;

@Injectable()
export class CommonDataService {

    private static count = 0;
    constructor(private http: HttpClient) {

    }


    getAllEntities(url: string) {
        const that = this;
        return this.http.get(url)
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
        // .finally(() => this.ngProgress.done());
    }

    getEntity(url: string) {
        const that = this;
        return this.http.get(url)
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
        //  .finally(() => this.ngProgress.done());
    }

    getEntityWithPayloadAsArg(url: string, payload: any) {
        const that = this;
        const reqHead = new HttpHeaders();
        reqHead.append('Content-Type', 'application/json');
        return this.http.post(url, payload, { headers: reqHead })
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
    }

    authenticate(url: string, userInfo: any) {
        const that = this;
        const reqHead = new HttpHeaders(userInfo ? {
            authorization: 'Basic ' + btoa(userInfo.login + ':' + userInfo.password)
        } : { authorization: 'Basic ' + btoa('' + ':' + '') });
        reqHead.append('Content-Type', 'application/json');
        if (userInfo) {
            return this.http.post(url, userInfo, { headers: reqHead })
                .map(this.extractData)
                .catch(err => this.handleError(err, url));
        } else {
            return this.http.post(url, {}, { headers: reqHead })
                .map(this.extractData)
                .catch(err => this.handleError(err, url));
        }
    }

    private extractData(response: Response) {

        return JSOG.decode(response) || {};
    }

    createEntity(url: string, resource) {
        const that = this;
        const reqHead = new HttpHeaders();
        reqHead.append('Content-Type', 'application/octet-stream');
        reqHead.append('Content-Encoding', 'gzip');
        const body = JSON.stringify(JSON.parse(JSOG.stringify(resource)), this.replaceEmptyStringsAndBooleans);
        // console.log("body==>"+body);
        const compressedData = this.compressDataUsingPako(body);
        const gzippedBLob = new Blob([compressedData], { type: 'application/octet-stream' });
        return this.http.post(url, gzippedBLob, { headers: reqHead })
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
    }

    replaceEmptyStringsAndBooleans(key, value) {
        if (value === null || value === undefined || (typeof value === 'string' && value === '')) {
            return undefined;
        }
        if (value === null || value === undefined || (typeof value === 'boolean' && value === false)) {
            return undefined;
        }
        return value;
    }

    updateEntity(url: string, resource: any) {
        const that = this;
        return this.http.patch(url, resource)
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
    }

    // TODO RS - this method is causing bad request issues, needs to be verified
    deleteEntity(url: string) {
        const that = this;
        return this.http.delete(url)
            .map(this.extractData)
            .catch(err => this.handleError(err, url));
    }

    private handleError(error: HttpErrorResponse, url: string) {


        const urlList = url.split('/');
        const errUrl = urlList[urlList.length - 1];
        console.log('url -------- > ' + urlList[urlList.length - 1]);
        return Observable.throw(error);
    }

    compressDataUsingPako(jsonString: string) {
        const binaryString = pako.gzip(jsonString);
        return binaryString;
    }
}
