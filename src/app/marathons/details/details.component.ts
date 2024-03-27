import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarathonsService } from '../marathons.service';
import { Marathon } from 'src/app/types/Marathon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  marathonId: string | undefined
  marathon: Marathon | undefined;

  constructor(private route: ActivatedRoute, private marathonsService: MarathonsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.marathonId = id;
      // Вземете данните за маратона с ID this.marathonId от сервиса
      this.marathonsService.getMarathonById(this.marathonId).subscribe((marathon: Marathon) => {
        // Използвайте данните за маратона в шаблона
      });
    }
}
}





