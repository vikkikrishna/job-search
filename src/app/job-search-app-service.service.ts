import { Injectable } from '@angular/core';
import { mockHandlers } from '../mocks';
import { getResponse } from 'msw';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobSearchAppServiceService {

  constructor() { }
  private favouriteList = new BehaviorSubject<any>({});



  async getJobLists() {
    const request = new Request('/jobs')
    const data = await getResponse(mockHandlers, request);
    const result = await data?.json();
    return result;
  }

  async getJobListById(id: number) {

    const request = new Request('/jobs/' + id)
    const data = await getResponse(mockHandlers, request);
    const result = await data?.json();
    return result;
  }

  setFavourites(value: any) {
    this.favouriteList.next(value);
  }

  getFavourites() {
    return this.favouriteList.asObservable();
  }

}
