import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_IMPORT_AZAttributes {
    LUSERIDINSERT?: number;
    STR_NACHNAME?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    FLT_WOCHENARBEITSZEIT?: number;
    DTINSERT?: Date;
    DT_EINTRITTSDATUM?: Date;
    STRID: string;
    STR_VORNAME?: string;
    STR_MAGRUPPE?: string;
    STR_PERSONALNUMMER?: string;
    STR_PERSONALNUMMERFK?: string;
    STR_KENNZEICHENTEILZEITKRAFT?: string;
}

@Table({
	tableName: "PER_T_IMPORT_AZ",
	timestamps: false 
})
export class PER_T_IMPORT_AZ extends Model<PER_T_IMPORT_AZAttributes, PER_T_IMPORT_AZAttributes> implements PER_T_IMPORT_AZAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NACHNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_WOCHENARBEITSZEIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_EINTRITTSDATUM?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VORNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MAGRUPPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PERSONALNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PERSONALNUMMERFK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KENNZEICHENTEILZEITKRAFT?: string;

}