import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_QUARTALSBERICHTAttributes {
    DTEDIT?: Date;
    REF_PERSONAL?: string;
    LUSERID?: number;
    REF_SALDENKONTROLLE?: string;
    DTINSERT?: Date;
    L_JAHR?: number;
    STRID: string;
    LUSERIDINSERT?: number;
    STR_SALDO?: string;
    STR_QUARTAL?: string;
    STR_MONAT3?: string;
    STR_ABTEILUNG?: string;
    STR_MONAT1?: string;
    STR_MONAT2?: string;
    STR_REFERAT?: string;
    REF_ABTEILUNG?: string;
}

@Table({
	tableName: "ZE_T_QUARTALSBERICHT",
	timestamps: false 
})
export class ZE_T_QUARTALSBERICHT extends Model<ZE_T_QUARTALSBERICHTAttributes, ZE_T_QUARTALSBERICHTAttributes> implements ZE_T_QUARTALSBERICHTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_SALDENKONTROLLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SALDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_QUARTAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MONAT3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ABTEILUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MONAT1?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MONAT2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REFERAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ABTEILUNG?: string;

}