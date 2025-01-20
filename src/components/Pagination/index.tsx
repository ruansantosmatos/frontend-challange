import React, { useState } from "react";
import styles from '@/components/styles/Pagination/pagination.module.css'

type PaginationProps = {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
    handleRecordsPerPageChange: (limit: number) => void
}

export function Pagination({
    currentPage, totalPages, onPageChange,
    handleRecordsPerPageChange
}: PaginationProps) {

    const [recordsPerPage, setRecordsPerPage] = useState(10)

    function getPageNumbers() {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) { pageNumbers.push(i) }
        return pageNumbers
    }

    function handleRecords(value: string) {
        setRecordsPerPage(Number(value))
        handleRecordsPerPageChange(Number(value))
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault()
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationInfo}>
                <h2>Página {currentPage} de {totalPages}</h2>
            </div>
            <div className={styles.containerRows}>
                <label htmlFor="recordsPerPage">
                    Linhas:
                </label>
                <input
                    id="recordsPerPage"
                    name="recordsPerPage"
                    type="number"
                    min="10"
                    max="100"
                    step={10}
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={recordsPerPage}
                    onChange={(e) => handleRecords(e.target.value)}
                />
            </div>
            <button
                className={styles.button}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {"<"}
            </button>
            {getPageNumbers().map((number) => (
                <button
                    key={number}
                    className={`${styles.button} ${number === currentPage ? styles.activeButton : ""}`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className={styles.button}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {">"}
            </button>
        </div>
    )
}
