# AngularChangedetectionPlayground

some colleagues who have not yet dealt much with the topic of detection in Angular may find it difficult to imagine what the difference is.

Here I would like to compare a few values first.

## Expectation

Default: Angular plays it safe and rather checks once too often than too little if something has changed and renders the DOM of the component again. This is done throughout the DOM tree.

OnPush: Angular relies on the ChangeDetection base board means to be sufficient, or pipes and components to inform the ChangeDetectionRef if something has changed outside the board means.

## Setup

Angular ~13
Material ~13

AppComponent - the App Wrapper
DetectionBlockComponent - Components which create Recursive Child-Components.

## Playground

```markdown
| App
| - 1
|   - 3
|     - 4
|       - 5
|         - 6
| - 2
|   - 7
|     - 8
```

## Test Process

1. Open Page
2. click detectChanges 4
3. click markForCheck 7
4. click markForCheck 4
5. click detectChanges 2
6. click markForCheck App
7. click detectChanges App


# Fazit

when app is on default, we come to the following numbers

| Step | check cycles |
|---|---|
| 1 | 15 |
| 2 | 13 |
| 3 | 12 |
| 4 | 13 |
| 5 | 11 |
| 6 | 10 |
| 7 | 9 |
|---|---|
| total | 83 |

when app is on Push, we come to the following numbers

| Step | check cycles |
|---|---|
| 1 | 11 |
| 2 | 9 |
| 3 | 8 |
| 4 | 9 |
| 5 | 7 |
| 6 | 6 |
| 7 | 5 |
|---|---|
| total | 55 |

### data behind the numbers

#### App on Default

| Component | Msg | Event |
|---|---|---|
| app | check | initial |
| 1 | check | initial |
| 2 | check | initial |
| 3 | check | initial |
| 4 | check | initial |
| 5 | check | initial |
| 6 | check | initial |
| 7 | check | initial |
| 8 | check | initial |
| app | check | initial |
| 1 | check | initial |
| 2 | check | initial |
| app | check | initial |
| 1 | check | initial |
| 2 | check | initial |
| 4 | detectChanges | click 4 |
| 5 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 3 | check | click 4 |
| 4 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 7 | markForCheck | click 7 |
| app | check | click 7 |
| 1 | check | click 7 |
| 2 | check | click 7 |
| 7 | check | click 7 |
| 8 | check | click 7 |
| app | check | click 7 |
| 1 | check | click 7 |
| 2 | check | click 7 |
| app | check | click 7 |
| 1 | check | click 7 |
| 2 | check | click 7 |
| 4 | markForCheck | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 3 | check | click 4 |
| 4 | check | click 4 |
| 5 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 2 | detectChanges | click 2 |
| 7 | check | click 2 |
| app | check | click 2 |
| 1 | check | click 2 |
| 2 | check | click 2 |
| app | check | click 2 |
| 1 | check | click 2 |
| 2 | check | click 2 |
| app | check | click 2 |
| 1 | check | click 2 |
| 2 | check | click 2 |
| App | markForCheck | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |
| App | detectChanges | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |

#### App on Push

| Component | Msg | Event |
|---|---|---|
| app | check | initial |
| 1 | check | initial |
| 2 | check | initial |
| 3 | check | initial |
| 4 | check | initial |
| 5 | check | initial |
| 6 | check | initial |
| 7 | check | initial |
| 8 | check | initial |
| app | check | initial |
| app | check | initial |
| 4 | detectChanges | click 4 |
| 5 | check | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 3 | check | click 4 |
| 4 | check | click 4 |
| app | check | click 4 |
| app | check | click 4 |
| 7 | markForCheck | click 7 |
| app | check | click 7 |
| 1 | check | click 7 |
| 2 | check | click 7 |
| 7 | check | click 7 |
| 8 | check | click 7 |
| app | check | click 7 |
| app | check | click 7 |
| 4 | markForCheck | click 4 |
| app | check | click 4 |
| 1 | check | click 4 |
| 2 | check | click 4 |
| 3 | check | click 4 |
| 4 | check | click 4 |
| 5 | check | click 4 |
| app | check | click 4 |
| app | check | click 4 |
| 2 | detectChanges | click 2 |
| 7 | check | click 2 |
| app | check | click 2 |
| 1 | check | click 2 |
| 2 | check | click 2 |
| app | check | click 2 |
| app | check | click 2 |
| App | markForCheck | click App |
| app | check | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| app | check | click App |
| App | detectChanges | click App |
| 1 | check | click App |
| 2 | check | click App |
| app | check | click App |
| app | check | click App |
