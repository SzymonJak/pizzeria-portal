# Dashboard

 - `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

 - `/login`
  - pola na guzik i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików
 - `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
   - kazda kolumna = 1 stolik
   - kazdy wiersz = 30 minut
   - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są róne stoliki
   - po kliknięci rezerwacji lub eventu, przechodzimy na stronę szczegółów
 - `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umoliwia edycję i zapisanie zmian
 - `/tables/booking/new`
  - analogicznie do powyzszej, bez początkowych informacji
 - `/tables/events/:id`
  - analogicznie do powyzszej, dla eventów
 - `/tables/events/new`
  - analogicznie do powyzszej, bez początkowych informacji

# Widok kelnera

 - `/waiter`
  - tabela
   - w wierszach stoliki
   - w kolumnach róne rodzaje informacji (status, czas od ostatniej aktywności)
   - w ostatniej kolumnie dostępne akcje dla danego stolika
 - `/waiter/order/new`
  - numer stolika (edytowalnt)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
 - `/waiter/order/:id`
  - jak powyzej

# Widok kuchni

 - `/kitchen`
  - wyświetlać listę zamówień w kolejności złoenia
  - lista musi zawierać:
   - nr stolika (lub zamówienia zdalnego)
   - pełne informacje dotyczące zamówionych dań
  - na liście musi być moliwość oznaczenia zamówienia jako zrealizowanego