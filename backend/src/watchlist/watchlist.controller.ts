import { Controller, Get, Patch, UseGuards, Param } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtAuthGuard)
@Controller('watchlist')
export class WatchlistController {
  constructor(private userService: WatchlistService) {}
 

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOwnWatchlist(@Param() @GetUser() user) {
    
    
  }
}


