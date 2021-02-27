package dev.batistella.agenda.controller;

import dev.batistella.agenda.model.Contato;
import dev.batistella.agenda.repository.ContatoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contatos/")
public class ContatoController {
    private ContatoRepository contatoRepo;

    ContatoController(ContatoRepository cr) {
        this.contatoRepo = cr;
    }

    @GetMapping
    public List findAll() {
        return this.contatoRepo.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity getById(@PathVariable Long id) {
        return this.contatoRepo.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Contato create(@RequestBody Contato contato) {
        return this.contatoRepo.save(contato);
    }

    @PutMapping(value = {"/{id}"})
    public ResponseEntity<Contato> update(@PathVariable("id") Long id, @RequestBody Contato contato) {
        return this.contatoRepo.findById(id).map(record -> {
            record.setNome(contato.getNome());
            record.setEmail(contato.getEmail());
            record.setIdade(contato.getIdade());
            Contato atualizado = (Contato) this.contatoRepo.save(record);
            return ResponseEntity.ok().body(atualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return this.contatoRepo.findById(id).map(record -> {
            this.contatoRepo.delete(record);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
