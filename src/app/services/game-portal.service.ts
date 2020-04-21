import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/model';
import { pluck, map, share } from 'rxjs/operators';

const GAMES_URL = 'assets/json/games.json';
const VENDORS_URL = 'assets/json/vendors.json';

@Injectable({
    providedIn: 'root'
})
export class GamePortalService {

    private userCredentials: BehaviorSubject<User> = new BehaviorSubject<User>({
        username: '',
        password: ''
    });

    constructor(private http: HttpClient) { }

    getUserCredentials(): Observable<User> {
        return this.userCredentials.asObservable();
    }

    setUserCredentials(userinfo: User): void {
        this.userCredentials.next(userinfo);
    }

    getVendors(): Observable<any> {
        return this.http.get(VENDORS_URL).pipe(
            pluck('data', 'vendors', 'edges'),
            map((vendors: any) => vendors.map(vendor => vendor.node))
        );
    }

    getGamesByVendor(vendorId): Observable<any> {
        return this.http.get(GAMES_URL).pipe(
            pluck('data', 'games', 'edges'),
            map((games: any) => games.map(game => game.node)),
            map(gameNodes => gameNodes.filter(node => node.vendor.id === vendorId)),
            share()
        )
    }
}
