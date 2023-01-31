import { WatchlistService } from './watchlist.service';
export declare class WatchlistController {
    private userService;
    constructor(userService: WatchlistService);
    getOwnWatchlist(user: any): void;
}
