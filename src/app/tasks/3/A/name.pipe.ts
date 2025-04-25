import { Pipe, PipeTransform } from '@angular/core';
import { Language, Name } from './name';
@Pipe({
  name: 'namePipe',
  pure: false,
  standalone: false
})
export class NamePipe implements PipeTransform {
  transform(value: Name, language: Language): string {
    if (value.first_name.length < 3 || value.last_name.length < 3){
      return "Nem megfelelő név!";
    }

    let name = "";
    switch (language){
      case Language.HU:
        name = [
          value.title,
          value.last_name,
          value.middle_name,
          value.first_name
        ].filter(Boolean).join(' ');
        break;
      case Language.EN:
        name = [
          value.title,
          value.first_name,
          value.middle_name,
          value.last_name
        ].filter(Boolean).join(' ');
        break;
    }

    return name;
  }
}