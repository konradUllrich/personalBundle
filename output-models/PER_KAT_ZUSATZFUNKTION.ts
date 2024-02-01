import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_ZUSATZFUNKTIONAttributes {
    STRID: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    STR_ZUSATZFUNKTION?: string;
    B_BETEILIGUNGSFUNKTION?: boolean;
    DTINSERT?: Date;
}

@Table({
	tableName: "PER_KAT_ZUSATZFUNKTION",
	timestamps: false 
})
export class PER_KAT_ZUSATZFUNKTION extends Model<PER_KAT_ZUSATZFUNKTIONAttributes, PER_KAT_ZUSATZFUNKTIONAttributes> implements PER_KAT_ZUSATZFUNKTIONAttributes {

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
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZUSATZFUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BETEILIGUNGSFUNKTION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}