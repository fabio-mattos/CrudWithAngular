import { Injectable } from "@angular/core";
import { HeaderData } from "./header-data.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  /**  O Subject é o observador para notificar alguma mudança */
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routerUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(heardData: HeaderData) {
    this._headerData.next(heardData);
  }
}
