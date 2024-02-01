import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERSONAL_IMPORTAttributes {
    STR_STELLENZEICHENFUEHRUNGSKRA?: string;
    TXT_AUFGABENBESCHREIBUNG?: string;
    STR_ORTGESCHAEFTLICH?: string;
    STR_POSITION?: string;
    STR_GRUPPE?: string;
    LUSERIDINSERT?: number;
    STR_VORNAME?: string;
    STR_LANDREGIONGESCHAEFTLICH?: string;
    DTEDIT?: Date;
    STR_EMAILANGEZEIGTERNAME?: string;
    STR_FIRMA?: string;
    STR_NACHNAME?: string;
    STR_TELEFONGESCHAEFTLICH2?: string;
    FLT_WOCHENARBEITSZEIT?: number;
    STR_STRASSEGESCHAEFTLICH?: string;
    STR_POSTLEITZAHLGESCHAEFTLICH?: string;
    STR_BUERO?: string;
    STR_WEITERESFAX?: string;
    FLT_URLAUBSANSPRUCH?: number;
    DTINSERT?: Date;
    STR_ABTEILUNG?: string;
    LUSERID?: number;
    STR_INITIALEN?: string;
    STR_KONTO?: string;
    STR_FUNKTION?: string;
    STR_ARTDERBESCHAEFTIGUNG?: string;
    STRID: string;
    STR_HAUS?: string;
    STR_BUEROLEITUNG?: string;
    STR_REFERAT?: string;
    STR_HOBBY?: string;
    STR_TELEFONGESCHAEFTLICH?: string;
}

@Table({
	tableName: "PER_T_PERSONAL_IMPORT",
	timestamps: false 
})
export class PER_T_PERSONAL_IMPORT extends Model<PER_T_PERSONAL_IMPORTAttributes, PER_T_PERSONAL_IMPORTAttributes> implements PER_T_PERSONAL_IMPORTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLENZEICHENFUEHRUNGSKRA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_AUFGABENBESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORTGESCHAEFTLICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_POSITION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GRUPPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VORNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LANDREGIONGESCHAEFTLICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAILANGEZEIGTERNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FIRMA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NACHNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TELEFONGESCHAEFTLICH2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_WOCHENARBEITSZEIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STRASSEGESCHAEFTLICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_POSTLEITZAHLGESCHAEFTLICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BUERO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_WEITERESFAX?: string;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_URLAUBSANSPRUCH?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ABTEILUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_INITIALEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KONTO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARTDERBESCHAEFTIGUNG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HAUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BUEROLEITUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REFERAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HOBBY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TELEFONGESCHAEFTLICH?: string;

}