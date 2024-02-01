import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_ORGA4Attributes {
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    STRID: string;
    LUSERID?: number;
    DTINSERT?: Date;
    FKSTRID?: string;
    STR_EBENE4?: string;
}

@Table({
	tableName: "PER_T_ORGA4",
	timestamps: false 
})
export class PER_T_ORGA4 extends Model<PER_T_ORGA4Attributes, PER_T_ORGA4Attributes> implements PER_T_ORGA4Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EBENE4?: string;

}