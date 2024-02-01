import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_FUNKTIONAttributes {
    STR_FUNKTION?: string;
    DTINSERT?: Date;
    REF_ORGANISATION?: string;
    LUSERID?: number;
    STRID: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    B_PERSONALVERWALTUNG?: boolean;
}

@Table({
	tableName: "PER_KAT_FUNKTION",
	timestamps: false 
})
export class PER_KAT_FUNKTION extends Model<PER_KAT_FUNKTIONAttributes, PER_KAT_FUNKTIONAttributes> implements PER_KAT_FUNKTIONAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ORGANISATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PERSONALVERWALTUNG?: boolean;

}