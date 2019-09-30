export class RestEndPoints {

    public static MESSAGE = '/message';




    /**
       * Provides the Base URL of Application
       */
    public static getBaseURL() {
        const baseUrl = window.location.host;

        return '/conversation';

    }


}
