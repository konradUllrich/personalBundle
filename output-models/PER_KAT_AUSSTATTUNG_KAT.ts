import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_AUSSTATTUNG_KATAttributes {
    STRID: string;
    DTINSERT?: Date;
    STR_AUSSTATTUNGKATEGORIE?: string;
    LUSERIDINSERT?: number;
    TXT_BESCHREIBUNG?: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "PER_KAT_AUSSTATTUNG_KAT",
	timestamps: false 
})
export class PER_KAT_AUSSTATTUNG_KAT extends Model<PER_KAT_AUSSTATTUNG_KATAttributes, PER_KAT_AUSSTATTUNG_KATAttributes> implements PER_KAT_AUSSTATTUNG_KATAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AUSSTATTUNGKATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

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

}