import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RequestsService {


  constructor(private httpClient: HttpClient) {
  }


  getToken(username, password, grant_type) {

    let url = 'http://localhost:8080/oauth/token';

    // let username = 'zdzislaw';
    // let password = '123';
    // let grant_type = 'password';

    const body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);
    body.append('grant_type', grant_type);

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic cGFzc0NsaWVudElkOndlYlNlY3JldA==');

    return this.httpClient.post(url, body.toString(),{headers: headers});


  }

}
